import styled from "styled-components";

export const DashBoardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--gray-4);
  color: white;

  header {
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 50px 0px 50px;
  }

  header button {
    width: 55px;
    height: 32px;
    color: white;
    background-color: var(--gray-3);
    border: none;
    border-radius: var(--base-radius);
  }

  header button:hover {
    cursor: pointer;
    background-color: var(--gray-2);
  }

  .greetingContainer {
    width: 100vw;
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 2px solid var(--gray-3);
    border-bottom: 2px solid var(--gray-3);
  }

  .greetingContainer h1 {
    font-size: var(--title-size);
  }

  .greetingContainer p {
    font-size: var(--heading-size);
    color: var(--gray-1);
  }

  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .mainContainer h3 {
    font-size: var(--heading-size);
    color: var(--gray-1);
  }

  @media screen and (max-width: 769px) {
    header {
      justify-content: space-between;
      padding: 10px;
    }
    .greetingContainer {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 15px;
      padding: 10px;
    }
  }
`;
