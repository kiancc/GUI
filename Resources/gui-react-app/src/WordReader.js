export async function WordReader(filePath, lineNumber) {
    try {
      const response = await fetch(filePath);
      const text = await response.text();
      const lines = text.split("\n");
  
      return lineNumber >= 1 && lineNumber <= lines.length
        ? lines[lineNumber - 1] // Return specific line (1-based index)
        : "Line not found";
    } catch (error) {
      console.error("Error reading file:", error);
      return "Error loading file";
    }
  }
  