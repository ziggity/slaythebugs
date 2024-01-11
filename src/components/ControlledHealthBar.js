import { useState } from "react";
const HealthBar = ({ maxHp = 100, hp = 100 } = {}) => {
  const barWidth = (hp / maxHp) * 100;

  return (
    <div>
      <div class="health-bar">
        <div className="bar" style={{ width: `${barWidth}%` }}></div>
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
        <img src='src/assets/images/cronjobhelperbot.png' alt="player" className="player-img" />
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
        class="damage random"
        onClick={() => {
          var damage = Math.floor(Math.random() * maxHp);
          SetHp(Math.max(0, hp - damage));
        }}
      >
        hit random
      </button>

      <button
        class="reset"
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
