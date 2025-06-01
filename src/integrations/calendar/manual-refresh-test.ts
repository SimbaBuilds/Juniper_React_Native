/**
 * Manual Test Script for Google Calendar Token Refresh
 * 
 * This script can be used to manually test the token refresh functionality
 * in a development environment with real Google OAuth tokens.
 * 
 * IMPORTANT: This script should only be used in development and never
 * committed with real credentials.
 */

import { GoogleCalendarService } from '../GoogleCalendarService';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TestResult {
  testName: string;
  success: boolean;
  message: string;
  details?: any;
}

/**
 * Utility function to simulate an expired token by modifying the expiration time
 */
async function simulateExpiredToken(): Promise<void> {
  const authData = await AsyncStorage.getItem('google_calendar_auth');
  if (authData) {
    const parsed = JSON.parse(authData);
    // Set expiration to 1 second ago
    parsed.expiresAt = Date.now() - 1000;
    await AsyncStorage.setItem('google_calendar_auth', JSON.stringify(parsed));
    console.log('🕒 Simulated expired token');
  }
}

/**
 * Utility function to simulate a soon-to-expire token (within 5-minute buffer)
 */
async function simulateSoonToExpireToken(): Promise<void> {
  const authData = await AsyncStorage.getItem('google_calendar_auth');
  if (authData) {
    const parsed = JSON.parse(authData);
    // Set expiration to 2 minutes from now (within 5-minute buffer)
    parsed.expiresAt = Date.now() + (2 * 60 * 1000);
    await AsyncStorage.setItem('google_calendar_auth', JSON.stringify(parsed));
    console.log('🕒 Simulated soon-to-expire token (2 minutes)');
  }
}

/**
 * Test Case 1: Token refresh with expired token
 */
async function testExpiredTokenRefresh(): Promise<TestResult> {
  try {
    console.log('\n🧪 Test 1: Expired Token Refresh');
    
    const service = GoogleCalendarService.getInstance();
    await service.initialize();
    
    if (!service.isAuthenticated()) {
      return {
        testName: 'Expired Token Refresh',
        success: false,
        message: 'Service not authenticated. Please authenticate first.',
      };
    }
    
    // Simulate expired token
    await simulateExpiredToken();
    
    // Re-initialize to load the modified token
    await service.initialize();
    
    // This should trigger a token refresh
    const calendars = await service.getCalendars();
    
    return {
      testName: 'Expired Token Refresh',
      success: true,
      message: 'Successfully refreshed expired token and fetched calendars',
      details: { calendarCount: calendars.items?.length || 0 },
    };
  } catch (error) {
    return {
      testName: 'Expired Token Refresh',
      success: false,
      message: `Failed: ${error instanceof Error ? error.message : String(error)}`,
      details: error,
    };
  }
}

/**
 * Test Case 2: Token refresh with soon-to-expire token
 */
async function testSoonToExpireTokenRefresh(): Promise<TestResult> {
  try {
    console.log('\n🧪 Test 2: Soon-to-Expire Token Refresh');
    
    const service = GoogleCalendarService.getInstance();
    
    // Simulate soon-to-expire token
    await simulateSoonToExpireToken();
    
    // Re-initialize to load the modified token
    await service.initialize();
    
    // This should trigger a token refresh due to 5-minute buffer
    const events = await service.getUpcomingEvents(3);
    
    return {
      testName: 'Soon-to-Expire Token Refresh',
      success: true,
      message: 'Successfully refreshed soon-to-expire token and fetched events',
      details: { eventCount: events.length },
    };
  } catch (error) {
    return {
      testName: 'Soon-to-Expire Token Refresh',
      success: false,
      message: `Failed: ${error instanceof Error ? error.message : String(error)}`,
      details: error,
    };
  }
}

/**
 * Test Case 3: Valid token should not refresh
 */
async function testValidTokenNoRefresh(): Promise<TestResult> {
  try {
    console.log('\n🧪 Test 3: Valid Token Should Not Refresh');
    
    const service = GoogleCalendarService.getInstance();
    await service.initialize();
    
    if (!service.isAuthenticated()) {
      return {
        testName: 'Valid Token No Refresh',
        success: false,
        message: 'Service not authenticated. Please authenticate first.',
      };
    }
    
    // First, ensure we have a fresh token by calling an API
    await service.getCalendars();
    
    // Get current auth data to verify token doesn't change
    const authData = await AsyncStorage.getItem('google_calendar_auth');
    const initialToken = authData ? JSON.parse(authData).accessToken : null;
    
    // Make another API call - this should NOT trigger a refresh
    await service.getUpcomingEvents(1);
    
    // Verify token hasn't changed
    const newAuthData = await AsyncStorage.getItem('google_calendar_auth');
    const currentToken = newAuthData ? JSON.parse(newAuthData).accessToken : null;
    
    const tokenUnchanged = initialToken === currentToken;
    
    return {
      testName: 'Valid Token No Refresh',
      success: tokenUnchanged,
      message: tokenUnchanged 
        ? 'Valid token was not refreshed (correct behavior)'
        : 'Valid token was unexpectedly refreshed',
      details: { 
        tokenChanged: !tokenUnchanged,
        initialTokenPrefix: initialToken?.substring(0, 10),
        currentTokenPrefix: currentToken?.substring(0, 10),
      },
    };
  } catch (error) {
    return {
      testName: 'Valid Token No Refresh',
      success: false,
      message: `Failed: ${error instanceof Error ? error.message : String(error)}`,
      details: error,
    };
  }
}

/**
 * Test Case 4: Multiple concurrent API calls with expired token
 */
async function testConcurrentRefresh(): Promise<TestResult> {
  try {
    console.log('\n🧪 Test 4: Concurrent API Calls with Expired Token');
    
    const service = GoogleCalendarService.getInstance();
    
    // Simulate expired token
    await simulateExpiredToken();
    await service.initialize();
    
    // Make multiple concurrent API calls - should only refresh once
    const promises = [
      service.getCalendars(),
      service.getUpcomingEvents(5),
      service.getEvents('primary', new Date().toISOString()),
    ];
    
    const results = await Promise.all(promises);
    
    return {
      testName: 'Concurrent API Calls',
      success: true,
      message: 'Successfully handled concurrent API calls with token refresh',
      details: {
        calendarCount: results[0].items?.length || 0,
        upcomingEventCount: results[1].length,
        eventCount: results[2].items?.length || 0,
      },
    };
  } catch (error) {
    return {
      testName: 'Concurrent API Calls',
      success: false,
      message: `Failed: ${error instanceof Error ? error.message : String(error)}`,
      details: error,
    };
  }
}

/**
 * Test Case 5: Token persistence after refresh
 */
async function testTokenPersistence(): Promise<TestResult> {
  try {
    console.log('\n🧪 Test 5: Token Persistence After Refresh');
    
    const service = GoogleCalendarService.getInstance();
    
    // Simulate expired token
    await simulateExpiredToken();
    await service.initialize();
    
    // Trigger refresh
    await service.getCalendars();
    
    // Get current auth data
    const authData = await AsyncStorage.getItem('google_calendar_auth');
    if (!authData) {
      throw new Error('No auth data found in AsyncStorage');
    }
    
    const parsed = JSON.parse(authData);
    const currentTime = Date.now();
    const tokenValidFor = parsed.expiresAt - currentTime;
    
    // Verify token is valid and has reasonable expiration
    const isValid = tokenValidFor > 0;
    const hasReasonableExpiration = tokenValidFor > (30 * 60 * 1000); // At least 30 minutes
    
    return {
      testName: 'Token Persistence',
      success: isValid && hasReasonableExpiration,
      message: isValid && hasReasonableExpiration
        ? 'Token properly persisted with valid expiration'
        : 'Token persistence issue detected',
      details: {
        tokenValidFor: Math.round(tokenValidFor / 60000), // minutes
        expiresAt: new Date(parsed.expiresAt).toISOString(),
        hasAccessToken: !!parsed.accessToken,
        hasRefreshToken: !!parsed.refreshToken,
      },
    };
  } catch (error) {
    return {
      testName: 'Token Persistence',
      success: false,
      message: `Failed: ${error instanceof Error ? error.message : String(error)}`,
      details: error,
    };
  }
}

/**
 * Main test runner
 */
export async function runManualRefreshTests(): Promise<void> {
  console.log('🚀 Starting Google Calendar Token Refresh Manual Tests');
  console.log('📝 Make sure you are authenticated with Google Calendar before running these tests');
  
  const tests = [
    testExpiredTokenRefresh,
    testSoonToExpireTokenRefresh,
    testValidTokenNoRefresh,
    testConcurrentRefresh,
    testTokenPersistence,
  ];
  
  const results: TestResult[] = [];
  
  for (const test of tests) {
    try {
      const result = await test();
      results.push(result);
      
      const status = result.success ? '✅' : '❌';
      console.log(`${status} ${result.testName}: ${result.message}`);
      
      if (result.details) {
        console.log('   Details:', result.details);
      }
      
      // Add delay between tests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      const errorResult: TestResult = {
        testName: test.name,
        success: false,
        message: `Test execution failed: ${error instanceof Error ? error.message : String(error)}`,
        details: error,
      };
      results.push(errorResult);
      console.log(`❌ ${test.name}: ${errorResult.message}`);
    }
  }
  
  // Summary
  const passed = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log('\n📊 Test Summary:');
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📈 Success Rate: ${Math.round((passed / results.length) * 100)}%`);
  
  if (failed > 0) {
    console.log('\n🔍 Failed Tests:');
    results
      .filter(r => !r.success)
      .forEach(r => console.log(`   - ${r.testName}: ${r.message}`));
  }
}

/**
 * Individual test functions for debugging
 */
export {
  testExpiredTokenRefresh,
  testSoonToExpireTokenRefresh,
  testValidTokenNoRefresh,
  testConcurrentRefresh,
  testTokenPersistence,
  simulateExpiredToken,
  simulateSoonToExpireToken,
}; 