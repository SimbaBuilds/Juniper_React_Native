 0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0

100 20.1M  100 20.1M    0     0  65.2M      0 --:--:-- --:--:-- --:--:-- 65.3M

[!] CocoaPods could not find compatible versions for pod "hermes-engine":

  In snapshot (Podfile.lock):

    hermes-engine (from `../node_modules/react-native/sdks/hermes-engine/hermes-engine.podspec`)

  In Podfile:

    hermes-engine (from `../node_modules/react-native/sdks/hermes-engine/hermes-engine.podspec`)

It seems like you've changed the version of the dependency `hermes-engine` and it differs from the version stored in `Pods/Local Podspecs`.

You should run `pod update hermes-engine --no-repo-update` to apply changes made locally.

Error
Command exited with non-zero exit-code: 1

Warning
Running ci_post_clone.sh script failed (exited with code 1). Executable scripts are run using the interpreter specified in the shebang line. 