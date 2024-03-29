import { useState } from "react";
import { Container, Card } from "reactstrap";
const HealthBar = ({ maxHp = 100, hp = 100 } = {}) => {
  const barWidth = (hp / maxHp) * 100;

  return (
    <div>
      <div className="health-bar">
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
          {hp} / {maxHp}
        </div>
        </Card>
      </div>
      <br />
    </div>

  );
};

const ControlledHealthBar = () => {
  const maxHp = 100;
  const [hp, SetHp] = useState(maxHp);
  return (
    <div>
      <HealthBar hp={hp} maxHp={maxHp} />
      <button
        className="damage random"
        onClick={() => {
          var damage = Math.floor(Math.random() * maxHp);
          SetHp(Math.max(0, hp - damage));
        }}
      >
        hit random
      </button>

      <button
        className="reset"
        onClick={() => {
          SetHp(maxHp);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default ControlledHealthBar;
