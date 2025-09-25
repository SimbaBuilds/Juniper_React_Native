node@20 is keg-only, which means it was not symlinked into /usr/local,

because this is an alternate version of another formula.

If you need to have node@20 first in your PATH, run:

  echo 'export PATH="/usr/local/opt/node@20/bin:$PATH"' >> ~/.zshrc

For compilers to find node@20 you may need to set:

  export LDFLAGS="-L/usr/local/opt/node@20/lib"

  export CPPFLAGS="-I/usr/local/opt/node@20/include"

🔧 Configuring Node.js PATH...

🔗 Creating Node.js symlinks...

sudo: a terminal is required to read the password; either use the -S option to read from standard input or configure an askpass helper

sudo: a password is required

Error
Command exited with non-zero exit-code: 1

Warning
Running ci_post_clone.sh script failed (exited with code 1). Executable scripts are run using the interpreter specified in the shebang line. 