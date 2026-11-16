# Prediction Mini

Open `index.html` in a file manager on Windows, macOS, or Linux. This is the entry point; paths with spaces are fine. No external dependencies, network connection, server, Python, Node, or npm are needed.

Enter a whole number from 0 to 100 in Quantity and select Calculate. The user supplies the input; the application does not load a dataset. The result is in demo units, not USD.

`app.js` contains the fixed educational calculation `10 + 20 × Quantity`. It is not a real or trained model, and there is no trained artifact. `samples/control_examples.json` records the control examples:

- Quantity 2 → 50 demo units
- Quantity 0 → 10 demo units
- Quantity 5 → 110 demo units

Empty input, −1, 2.5, 101, and text should produce a clear error. Open `checks.html` in the file manager to execute the calculation checks and see PASS or FAIL for each case. A label change should not change the results.
