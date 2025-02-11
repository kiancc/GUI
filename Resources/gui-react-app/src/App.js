import { useEffect, useState } from "react";
import { WordReader } from "./WordReader";
import './style.css';

function Submit({ onSubmitClick }) {
  return (
    <div>
      <button className="submit" onClick={onSubmitClick}>
        Submit
      </button>
    </div>
  );
}

function Square({ value, onInputChange, disabled, bgColor }) {
  return (
    <div>
      <input
        className="square"
        type="text"
        value={value || ""}
        onChange={(e) => onInputChange(e.target.value)}
        required
        minLength="1"
        maxLength="1"
        size="1"
        disabled={disabled}
        style={{
          backgroundColor: bgColor || "white",
          color: "black",
          fontSize: "20px",
          textAlign: "center",
          width: "40px",
          height: "40px",
          border: "1px solid black",
        }}
      />
    </div>
  );
}

function App() {
  const [rows, setRows] = useState(Array(5).fill().map(() => Array(5).fill("")));
  const [rowColors, setRowColors] = useState(Array(5).fill().map(() => Array(5).fill("white"))); // Store colors
  const [activeRow, setActiveRow] = useState(0);
  const [line, setLine] = useState("");

  useEffect(() => {
    async function fetchLine() {
      const lineContent = await WordReader("/words.txt", 3);
      setLine(lineContent.trim()); // Ensure no extra spaces
    }

    fetchLine();
  }, []);

  function handleInputChange(value, i, j) {
    if (i !== activeRow) return;
    const newRows = rows.map((row, rowIndex) =>
      rowIndex === i ? row.map((col, colIndex) => (colIndex === j ? value : col)) : row
    );

    setRows(newRows);
  }

  function handleSubmitClick() {
    if (activeRow >= 5) return;

    const answer = line.split(""); // Convert string to array
    const currentRow = rows[activeRow];

    // Create a copy of rowColors
    const newRowColors = [...rowColors];

    // Step 1: Determine correctness
    const newColors = currentRow.map((char, i) => {
      if (char === answer[i]) {
        return "green"; // Correct position ✅
      } else if (answer.includes(char)) {
        return "yellow"; // Exists but in wrong position 🟡
      } else {
        return "gray"; // Not in word ❌
      }
    });

    newRowColors[activeRow] = newColors;
    setRowColors(newRowColors);

    // Step 2: Check if user has won
    if (currentRow.join("") === line) {
      alert("Congratulations! You got the correct answer! 🎉");
      return;
    }

    // Move to next row
    setActiveRow((prev) => prev + 1);
  }

  return (
    <>
      <div>
        <h1>Wordlé</h1>
        
        {[...Array(5)].map((_, rowIndex) => (
          <div className="board-row" key={rowIndex} style={{ display: "flex" }}>
            {[...Array(5)].map((_, colIndex) => (
              <Square
                key={`${rowIndex}-${colIndex}`}
                value={rows[rowIndex][colIndex]}
                onInputChange={(value) => handleInputChange(value, rowIndex, colIndex)}
                disabled={rowIndex !== activeRow}
                bgColor={rowColors[rowIndex][colIndex]}
              />
            ))}
          </div>
        ))}

        <Submit onSubmitClick={handleSubmitClick} />
      </div>
    </>
  );
}

export default App;
