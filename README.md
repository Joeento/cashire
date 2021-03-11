# Cashire
### Intro
Cashire is a simple cash register framework that can be easily extended to work
with multiple types of products and also discounts.  It is designed to use
**dependency injection** to abstract as much of the code possible to separate services so that 1) We can use callbacks to handle calls to external services and 2) test driven development can be done.  Due to it's DI structure, Cashire can also be
integrated with a popular Inversion of Control framework, such as [InversifyJS].(https://inversify.io/)

### Installation

Cashire is a library that is designed to be easily imported into your project.  If you'd like to build and test it independently, you can run:

    git clone git@github.com:Joeento/cashire.git
    npm install
    npm run build
    npm run test
