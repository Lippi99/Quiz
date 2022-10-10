import styled from "styled-components";

export const QuizContainer = styled.div`
  max-width: 520px;
  width: 100%;
  height: 250px;
  background-color: #252d4a;
  border-radius: 30px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: row;
  align-items: center;

  .questionSide {
    max-width: 260px;
    width: 100%;
    height: 240px;
    padding: 1rem 1.5rem;

    > h1 {
      font-size: 1.5rem;
      color: white;
      margin-bottom: 1rem;
    }

    > span {
      font-size: 1.2rem;
      color: white;
    }
  }

  .answerSide {
    max-width: 260px;
    width: 100%;
    height: 240px;
    padding: 1rem 1.5rem;
  }

  .questionButton {
    width: 100%;
    display: flex;
    padding: 0.5rem;
    border: 5px solid #234668;
    border-radius: 18px;
    background-color: transparent;
    color: white;
    cursor: pointer;

    + button {
      margin-top: 0.9rem;
    }

    :hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  .showScore {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > span {
      color: white;
      font-size: 1.8rem;
    }

    > button {
      width: 50%;
      padding: 0.5rem;
      color: white;
      margin-top: 3rem;
      cursor: pointer;
      border-radius: 20px;
      background: #234668;
      border: none;
      transition: 0.2s filter;

      :hover {
        filter: brightness(120%);
      }
    }
  }

  @media screen and (max-width: 380px) {
    flex-direction: column;
    border-radius: 0;
    height: 100%;
    align-items: center;
    justify-content: center;

    .questionSide {
      text-align: center;
      height: auto;

      > h1 {
        font-size: 2rem;
      }
      > span {
        font-size: 1.4rem;
        line-height: 40px;
      }
    }

    .answerSide {
      width: 100%;
      max-width: unset;

      > button {
        font-size: 1.3rem;
        + button {
          margin-top: 2rem;
        }
      }
    }
  }
`;
