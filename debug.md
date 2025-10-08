⚠️  ld: duplicate symbol 'typeinfo for worklets::WorkletRuntime' in
┌─ libRNWorklets.a[29](WorkletRuntime.o)
└─ libRNReanimated.a[50](WorkletRuntime.o)

⚠️  ld: duplicate symbol 'worklets::WorkletsModuleProxy::~WorkletsModuleProxy()' in
┌─ libRNWorklets.a[35](WorkletsModuleProxy.o)
└─ libRNReanimated.a[55](WorkletsModuleProxy.o)


❌  ld: 23 duplicate symbols



❌  clang: error: linker command failed with exit code 1 (use -v to see invocation)


    Run script build phase '[CP-User] [Hermes] Replace Hermes for the right configuration, if needed' will be run during every build because it does not specify any outputs. To address this issue, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'hermes-engine' from project 'Pods')
    Run script build phase '[CP-User] Generate updates resources for expo-updates' will be run during every build because it does not specify any outputs. To address this issue, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'EXUpdates' from project 'Pods')

› 11 error(s), and 63 warning(s)

CommandError: Failed to build iOS project. "xcodebuild" exited with error code 65.