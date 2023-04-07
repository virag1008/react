import { useState } from "react";
function App() {
  const [input, setInput] = useState("");

  function handleBlur() {
    function unique_combination(l, sum, K, local, A) {
      // If a unique combination is found
      if (sum == K) {
        document.write("{");
        for (let i = 0; i < local.length; i++) {
          if (i != 0) document.write(" ");
          document.write(local[i]);
          if (i != local.length - 1) document.write(", ");
        }
        document.write("}" + "<br>");
        return;
      }

      for (let i = l; i < A.length; i++) {
        if (sum + A[i] > K) continue;

        if (i > l && A[i] == A[i - 1]) continue;

        local.push(A[i]);

        unique_combination(i + 1, sum + A[i], K, local, A);

        local.pop();
      }
    }

    function Combination(A, K) {
      document.write("Unique combinations for - " + K + "<br>");
      //A.sort((a, b) => a - b);

      let local = [];
      unique_combination(0, 0, K, local, A);
    }

    var asd = input.split("");
    let B = asd.map((item, id) => {
      return Number(item);
    });

    B.sort();
    console.log(B);

    for (let i = 0; i < B.length; i++) {
      // console.log(B[i]);
      Combination(B, B[i]);
      //console.log(B);
    }
  }

  return (
    <>
      <p>find combinations of Numbers</p>
      <input
        type="number"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onBlur={handleBlur}
      />
    </>
  );
}
export default App;
