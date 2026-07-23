import { useState } from "react";
export default function Counter() {
      const [count, setCount] = useState(0);

      return (
            <div className="counter-container">
                  <div className="counter-card">
                        <h1 className="counter-label">Counter</h1>
                        <div className="counter-value">{count}</div>
                        <div className="button-group">
                              <button
                                    className="btn btn-increment"
                                    onClick={() => setCount(count + 1)}
                              >
                                    + 1
                              </button>
                              <button
                                    className="btn btn-reset"
                                    onClick={() => setCount(0)}
                              >
                                    0
                              </button>
                        </div>
                  </div>
            </div>
      );
}
