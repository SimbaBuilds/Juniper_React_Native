#!/bin/bash

echo "Universal Links Test Script for MobileJarvisNative"
echo "================================================="
echo ""

# Check AASA file accessibility
echo "1. Checking Apple App Site Association file..."
AASA_URL="https://juniperassistant.com/.well-known/apple-app-site-association"
echo "   Testing: $AASA_URL"

# Test with curl
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$AASA_URL")
if [ "$HTTP_STATUS" = "200" ]; then
    echo "   ✅ AASA file is accessible (HTTP $HTTP_STATUS)"
    
    # Check content type
    CONTENT_TYPE=$(curl -s -I "$AASA_URL" | grep -i content-type | cut -d' ' -f2)
    echo "   Content-Type: $CONTENT_TYPE"
    
    # Download and display the file
    echo ""
    echo "2. AASA file content:"
    echo "   -------------------"
    curl -s "$AASA_URL" | python3 -m json.tool
    echo ""
else
    echo "   ❌ AASA file not accessible (HTTP $HTTP_STATUS)"
    echo "   Make sure the file is uploaded to your server"
    exit 1
fi

# Check for Team ID in the file
echo "3. Verifying Team ID..."
if curl -s "$AASA_URL" | grep -q "2D46F842HA"; then
    echo "   ✅ Team ID found in AASA file"
else
    echo "   ❌ Team ID not found in AASA file"
fi

echo ""
echo "4. Testing OAuth redirect URLs..."
SERVICES=("gmail" "google-calendar" "google-docs" "google-sheets" "google-meet")

for SERVICE in "${SERVICES[@]}"; do
    URL="https://juniperassistant.com/oauth/$SERVICE/callback"
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
    echo "   $URL - HTTP $STATUS"
done

echo ""
echo "5. Next steps:"
echo "   - Build and run the app on a real iOS device (not simulator)"
echo "   - Try the Gmail integration"
echo "   - Check Xcode console for 'Deep link received' logs"
echo "   - If not working, check device console for 'swcd' process logs"
echo ""
echo "Note: Universal Links are cached by iOS. If changes aren't reflected:"
echo "   - Delete the app from device"
echo "   - Clear Safari cache"
echo "   - Reinstall the app"