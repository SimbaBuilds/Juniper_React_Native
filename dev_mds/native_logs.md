{
  "event_message": "ydbabipbxxleeiiysojv | POST | 400 | 10.118.86.54 | 96a1fad2f6ff2e5d-DFW | /object/chat-images/56a2c117-6486-4ca5-a57d-6c2e877e7083/images/chat_image_1754351663212.jpg | okhttp/4.12.0",
  "id": "256b1278-0e14-4d10-ad8a-fba23e37ebb4",
  "metadata": [
    {
      "appVersion": "1.25.9",
      "context": [
        {
          "host": "ip-10-118-21-133.us-east-2.compute.internal",
          "pid": 1,
          "type": "request"
        }
      ],
      "err": [],
      "error": [
        {
          "message": "No content provided",
          "name": "Error",
          "raw": "{\"metadata\":{},\"code\":\"InvalidRequest\",\"httpStatusCode\":400,\"userStatusCode\":400,\"originalError\":{\"metadata\":{},\"code\":\"InvalidRequest\",\"httpStatusCode\":400,\"userStatusCode\":400}}",
          "stack": "Error: No content provided\n    at Object.NoContentProvided (/app/dist/internal/errors/codes.js:284:29)\n    at fileUploadFromRequest (/app/dist/storage/uploader.js:275:34)\n    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at async ObjectStorage.uploadFromRequest (/app/dist/storage/object.js:50:27)\n    at async Object.<anonymous> (/app/dist/http/routes/object/createObject.js:91:44)"
        }
      ],
      "event": null,
      "job": null,
      "jodId": null,
      "level": "warning",
      "metadata": null,
      "objectPath": null,
      "objectVersion": null,
      "operation": "storage.object.upload",
      "owner": "56a2c117-6486-4ca5-a57d-6c2e877e7083",
      "payload": null,
      "project": "ydbabipbxxleeiiysojv",
      "rawError": [],
      "region": "us-east-2",
      "req": [
        {
          "headers": [
            {
              "host": "storage-api-lb-us-east-2-ext.storage.supabase.com",
              "x_client_trace_id": null,
              "expires": null,
              "x_forwarded_prefix": "/storage/v1",
              "cf_connecting_ip": "72.177.68.233",
              "cf_ray": "96a1fad2f6ff2e5d-DFW",
              "location": null,
              "cf_ipcountry": null,
              "tus_resumable": null,
              "sb_gateway_mode": null,
              "x_forwarded_proto": "https",
              "x_forwarded_host": "ydbabipbxxleeiiysojv.supabase.co",
              "x_client_info": "supabase-js-react-native/2.49.8",
              "transfer_encoding": null,
              "x_real_ip": null,
              "content_type": "multipart/form-data; boundary=11865b97-69d7-4777-87a0-33aeb1e54e40",
              "accept": null,
              "user_agent": "okhttp/4.12.0",
              "cf_cache_status": null,
              "upload_metadata": null,
              "range": null,
              "referer": null,
              "x_forwarded_port": "443",
              "content_range": null,
              "content_length": "162",
              "cache_control": null,
              "sb_gateway_version": null,
              "content_disposition": null,
              "upload_length": null,
              "date": null,
              "x_upsert": "false",
              "if_none_match": null,
              "if_modified_since": null,
              "upload_offset": null
            }
          ],
          "hostname": "storage-api-lb-us-east-2-ext.storage.supabase.com",
          "method": "POST",
          "region": "us-east-2",
          "remoteAddress": "10.118.86.54",
          "remotePort": 58756,
          "traceId": "96a1fad2f6ff2e5d-DFW",
          "url": "/object/chat-images/56a2c117-6486-4ca5-a57d-6c2e877e7083/images/chat_image_1754351663212.jpg"
        }
      ],
      "reqId": "96a1fad2f6ff2e5d-DFW",
      "res": [
        {
          "headers": [
            {
              "cache_control": null,
              "content_disposition": null,
              "content_length": "77",
              "content_range": null,
              "content_type": "application/json; charset=utf-8",
              "etag": null,
              "expires": null,
              "last_modified": null,
              "location": null,
              "tus_resumable": null,
              "upload_length": null,
              "upload_metadata": null,
              "upload_offset": null,
              "x_transformations": null
            }
          ],
          "statusCode": 400
        }
      ],
      "resources": [
        "/chat-images/56a2c117-6486-4ca5-a57d-6c2e877e7083/images/chat_image_1754351663212.jpg"
      ],
      "responseTime": 50.438409984111786,
      "role": "authenticated",
      "serverTimes": [],
      "span_id": null,
      "tenantId": "ydbabipbxxleeiiysojv",
      "trace_flags": null,
      "trace_id": null
    }
  ],
  "timestamp": 1754351665277000
}