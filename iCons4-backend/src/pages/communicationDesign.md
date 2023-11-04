# Why is this project significant.

The following project, while accessible to everyone, is mainly targeted towards the millions of developers creating digital products on the daily. We attempt to reform low level systems in servers and mainframes, in an effort to have userland applications work more efficiently, increase server bandwidth, and give a little bit back to the environment.

Let's dive a little bit into each of these:

## First, Some Background

This project attempts to compare and contrast performance differences between RUST and C++, two low level languages that were created at different points of time, and with different goals in mind.

While C++ was developed as an incremental upgrade to C, it follows a lot of compiler conventions from the 90s and has not changed much in structure. C++ is prone to various errors if users are not mindful: memory leaks, segmentation faults, kernel errors, and so on. Moreover, being an incremental upgrade to an already old language, C++ can sometimes not be the most efficient language out there.

On the other hand, we have RUST: a language whose development started in 2010, and is continuing today. RUST attempts to employ stricter typesetting, better error tracking, and more stringent memory usage to run more efficiently. 

This is not to say that C++ is a "bad, outdated language". Simply put, most low level systems today still run on C++, mainly because the cost of refactoring to RUST is enormous, and benefits unknown.

By comparing the performance differences between the two languages, we can determine the Return on Investment, should an undertaking be made to refactor code into the new language.

## Hypothesis 1: Lower the Barrier of Entry to Low-Level Development

Low Level Systems: including, but not limited to, CPU/GPU Architectures, Compilers, Operating Systems, Networking Interfaces, Communication Protocols, and the like are a culmination of decades of work, most of which really gained traction in 1970s. As a result, there exists a high amount of legacy code, which can be unreadable and intimidating: thus making the development process inaccessible to many.

The manner in which languages such as C/C++ behave can also differ between systems, which is a result of the time that they were created in. Free/Libre, or Open Source software did not quite exist: which meant that companies shipping computer systems had full control over how a certain language would behave on their system. As a result, C behaves differently on different kernels, even today.

There are currently tremendous amounts of versions of C in circulation, and this is before we get into the forks of this language (such as Arduino-C, Objective-C, C#, and so on).

RUST was developed from day 1 as an open source project, placing proper standardization across platforms. RUST behaves exactly the same, on every single piece of hardware. Thus, this lowers the barrier of entry incredibly. Paired with incredible documentation, and a unified compilation process on every system, RUST makes low level development significantly easier to novices and professionals alike.

On top of C++, RUST provides the following benefits:

* RUST has a more strong typesetting that prevents common errors such as NULL Pointer referencing, memory leaks, buffer overflows, and race conditions. Using the concept of ownership and borrowing to manage memory and resources during compilation, RUST can theoritically execute equally complex programs while using lesser resources.
* RUST allows for more concise code, which makes readability easier for developers. Since low level systems get super complicated to execute even the most basic operations, the cleaner code syntax of RUST is crucial for continued development with the shortest learning curve. The syntax allows for less complexity, thus allowing for updates in low level code at a faster pace.
* RUST is designed for parallel processing and concurrency, which means that any code written is extensible to any system imaginable: ranging from a Raspberry Pi to an IBM Mainframe.

If this undertaking of shifting away from C++ into RUST is fruitful, developers can expect:

* More readable, and less legacy code.
* Faster kernel updates, and a higher ability to contribute to kernel source code.
* More security in kernel code: since it becomes less prone to memory leaks, kernel panics, and the like. This also results in more reliable systems, overall.
* Performance advantages in low level systems would result in faster performance of userland applications, without making a single change to any piece of code.
* Increase bandwidth of servers, without paying for any newer servers.

These are some of the many benefits that developers can expect. However, there's more...

## Hypothesis 2: Environmental Impacts

