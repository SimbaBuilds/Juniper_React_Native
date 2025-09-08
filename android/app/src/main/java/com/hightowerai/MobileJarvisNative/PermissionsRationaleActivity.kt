package com.hightowerai.MobileJarvisNative

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp

class PermissionsRationaleActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            PermissionsRationaleScreen(
                onFinish = { finish() }
            )
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PermissionsRationaleScreen(onFinish: () -> Unit) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Health Data Privacy") }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "How Juniper Uses Your Health Data",
                style = MaterialTheme.typography.headlineMedium,
                textAlign = TextAlign.Center
            )
            
            Text(
                text = "Juniper integrates with Health Connect to provide you with personalized health insights and track your wellness goals. We access only the health data you explicitly grant permission for.",
                style = MaterialTheme.typography.bodyLarge,
                textAlign = TextAlign.Center
            )
            
            Card(
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Text(
                        text = "Data We May Access:",
                        style = MaterialTheme.typography.titleMedium
                    )
                    Text("• Steps and physical activity")
                    Text("• Heart rate and cardiovascular data")
                    Text("• Sleep patterns and quality") 
                    Text("• Weight, height, and body composition")
                    Text("• Exercise sessions and workouts")
                    Text("• Nutrition and hydration data")
                    Text("• Body temperature and vital signs")
                    Text("• Blood glucose and oxygen saturation")
                    Text("• Reproductive health data")
                }
            }
            
            Card(
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Text(
                        text = "Your Privacy Rights:",
                        style = MaterialTheme.typography.titleMedium
                    )
                    Text("• You control which data types to share")
                    Text("• You can revoke permissions at any time")
                    Text("• Data is encrypted and securely stored")
                    Text("• We never sell your health information")
                }
            }
            
            Spacer(modifier = Modifier.weight(1f))
            
            Button(
                onClick = onFinish,
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("I Understand")
            }
        }
    }
}