import React from "react";
import "./App.css";
import Paper from "./images/Paper.png";
import Scissors from "./images/Scissors.png";
import Rock from "./images/Rock.png";
import Logo from "./images/logo.svg";
import Rule from "./images/image-rules.svg";

//Object for user picked
const pick = {
  Rock: Rock,
  Paper: Paper,
  Scissors: Scissors,
};

//Initialize score
let Score = 0;

//Constructor
class Choices {
  constructor(choice) {
    this.choice = choice;
  }

  pick() {
    // Variables
    const choose = document.querySelector(".choose");
    const contest = document.querySelector(".contest");

    choose.style.display = "none";
    contest.style.display = "block";

    const userPick = document.querySelector("#userPicked");
    userPick.src = pick[this.choice];

    //set UserChoice
    const userHand = document.querySelector("#userHand");
    if (this.choice === "Rock") {
      userHand.src = pick[this.choice];
    }
    if (this.choice === "Paper") {
      userHand.src = pick[this.choice];
    }
    if (this.choice === "Scissors") {
      userHand.src = pick[this.choice];
    }
    //Computer choice
    const ComputerPick = document.querySelector("#ComputerPicked");
    const computerOptions = [Rock, Paper, Scissors];
    let computerChoice = computerOptions[Math.floor(Math.random() * 3)];
    ComputerPick.src = computerChoice;

    //Timeout for step 2
    setTimeout(() => {
      const result = document.querySelector(".result");
      contest.style.display = "none";
      result.style.display = "block";

      // Decisions
      const finalResult = (refScore) => {
        const decide = document.querySelector(".ref");
        decide.innerHTML = `<h2>${refScore}</h2>`;
      };
      console.log(Score);
      const setScore = (score) => {
        Score = score;
        const number = document.querySelector(".number");
        number.innerText = score;
        console.log(Score);
      };

      if (pick[this.choice] === Paper && computerChoice === Rock) {
        finalResult("YOU WIN");
        setScore(Score + 1);
      }
      if (pick[this.choice] === Paper && computerChoice === Scissors) {
        finalResult("YOU LOSE");
        setScore(Score - 1);
      }
      if (pick[this.choice] === Paper && computerChoice === Paper) {
        finalResult("it's a tie");
      }
      if (pick[this.choice] === Rock && computerChoice === Scissors) {
        finalResult("YOU WIN");
        setScore(Score + 1);
      }
      if (pick[this.choice] === Rock && computerChoice === Paper) {
        finalResult("YOU LOSE");
        setScore(Score - 1);
      }
      if (pick[this.choice] === Rock && computerChoice === Rock) {
        finalResult("it's a tie");
      }
      if (pick[this.choice] === Scissors && computerChoice === Paper) {
        finalResult("YOU WIN");
        setScore(Score + 1);
      }
      if (pick[this.choice] === Scissors && computerChoice === Rock) {
        finalResult("YOU LOSE");
        setScore(Score - 1);
      }
      if (pick[this.choice] === Scissors && computerChoice === Scissors) {
        finalResult("it's a tie");
      }
    }, 3000);
  }

  //Play Again
  playAgain() {
    const choose = document.querySelector(".choose");
    const contest = document.querySelector(".contest");
    const result = document.querySelector(".result");

    contest.style.display = "none";
    result.style.display = "none";
    choose.style.display = "block";
  }

  // Display rules
  rules() {
    const rules = document.querySelector("#rules");
    rules.style.display = "flex";

    setTimeout(() => {
      rules.style.display = "none";
    }, 10000);
  }
}

const App = () => {
  return (
    <div className="container">
      <section className="first-container">
        <img src={Logo} alt="" srcset="" className="logo" />
        <ul className="score-board">
          <li
            style={{
              color: "hsl(229, 64%, 46%)",
              fontSize: ".9rem",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            SCORE
          </li>
          <li className="number">0</li>
        </ul>
      </section>
      <div className="picked"></div>
      <StepOne />
      <StepTwo />
      <StepThree />
      <div
        className="rules-bg"
        onClick={() => {
          new Choices().rules();
        }}
      >
        <p className="rules">RULES</p>
      </div>
      <img
        src={Rule}
        alt="rules"
        srcset=""
        id="rules"
        style={{ display: "none" }}
      />
    </div>
  );
};

const StepOne = () => {
  return (
    <div className="cards choose">
      <div
        style={{
          width: "100%",
          display: "grid",
          placeContent: "center",
          transform: "translateY(-7em)",
        }}
      >
        <section
          style={{
            display: "flex",
            width: "350px",
            marginTop: "9.5em",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={() => {
              new Choices("Paper").pick();
            }}
          >
            <img src={Paper} alt="paper" srcset="" width="130px" />
          </div>
          <div
            onClick={() => {
              new Choices("Scissors").pick();
            }}
          >
            <img src={Scissors} alt="paper" srcset="" width="130px" />
          </div>
        </section>
      </div>
      <div
        className="rock"
        onClick={() => {
          new Choices("Rock").pick();
        }}
      >
        <img src={Rock} alt="paper" srcset="" width="130px" />
      </div>
    </div>
  );
};

const StepTwo = () => {
  return (
    <div
      className="contest"
      style={{
        display: "none",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="cards_step2">
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "350px",
            marginTop: "2em",
          }}
        >
          <div className="cols">
            <p className="picked">You Picked</p>
            <img id="userPicked" width="130px" alt="paper" srcset="" />`
          </div>
          <div className="cols">
            <p className="picked"></p>
            <div className="transparent"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

const StepThree = () => {
  return (
    <div
      className="result"
      style={{
        display: "none",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="cards_step2">
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            width: "350px",
            marginTop: "2em",
          }}
        >
          <div className="cols">
            <p className="picked">You Picked</p>
            <img id="userHand" width="130px" alt="paper" srcset="" />
          </div>
          <div className="cols" style={{ margin: "0 0 0 35px" }}>
            <p className="picked">The House Picked</p>
            <img id="ComputerPicked" width="130px" alt="paper" srcset="" />
          </div>
        </section>
      </div>
      <div className="decision ref"></div>
      <div className="decision">
        <p id="play-again" onClick={() => new Choices().playAgain()}>
          PLAY AGAIN
        </p>
      </div>
    </div>
  );
};

export default App;
