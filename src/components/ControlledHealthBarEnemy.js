import { useState } from "react";
import { Container, Card } from "reactstrap";
const HealthBare = ({ maxHpe = 100, hpe = 100 } = {}) => {
  const barWidth = (hpe / maxHpe) * 100;

  return (
    <div>
      <div className="health-bar2">
        <Card>
        <div className="bar flex" style={{ width: `${barWidth}%` }}></div>
        <div className="hit" style={{ width: `${0}%` }}></div>
        <div
          style={{
            position: "absolute",
            top: "5px",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          {hpe} / {maxHpe}
        </div>
        </Card>
      </div>
      <br />
    </div>

  );
};

const ControlledHealthBarEnemy = () => {
  const maxHpe = 100;
  const [hpe, SetHpe] = useState(maxHpe);
  return (
    <div>
      <HealthBare hpe={hpe} maxHpe={maxHpe} />
      <button
        className="damage random"
        onClick={() => {
          SetHpe(Math.max(0, hpe - 6));
        }}
      >
        hit random
      </button>

      <button
        className="reset"
        onClick={() => {
          SetHpe(maxHpe);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default ControlledHealthBarEnemy;
