# Node.js Port Already in Use Error

This repository demonstrates a common error encountered when developing Node.js HTTP servers: the failure to start due to the port already being in use.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a robust solution.

## Problem

Attempting to start a Node.js server on a port that's already occupied by another process results in an error.  The default behavior is to simply crash the server without providing much information. 

## Solution

The solution involves implementing error handling to gracefully manage the port-in-use scenario. This includes trying alternative ports or waiting for the port to become available.  The solution file demonstrates a more robust approach.