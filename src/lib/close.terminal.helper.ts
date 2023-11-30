export function closeTerminal(): void {
  // Check if the platform is Windows or POSIX-based (Unix-like: macOS, Linux)
  if (process.platform === 'win32') {
    // For Windows-based systems
    // Close the terminal window using the 'taskkill' command
    require('child_process').exec('taskkill /F /PID ' + process.pid);
  } else {
    // For POSIX-based systems (macOS, Linux)
    // Close the terminal window using the 'kill' command
    process.exit(); // This might close the entire Node.js process along with the terminal
  }
}
