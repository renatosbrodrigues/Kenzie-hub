import styled from "styled-components";

export const StylingTechContainer = styled.div`
  width: 750px;
  height: 550px;
  background-color: var(--gray-3);
  color: black;

  .techContainerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: var(--gray-4);
  }

  .techContainerHeader button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray-1);
    border: none;
    border-radius: var(--base-radius);
    font-size: 18px;
    color: white;
  }

  .techContainerContent {
    max-height: 550px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }

  .techCard {
    color: white;
    background-color: var(--gray-4);
    max-width: 700px;
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: var(--base-radius);
  }

  .techCard:hover {
    background-color: var(--gray-2);
    width: 95%;
  }

  .techCard button {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    color: var(--gray-1);
  }
  .techCard button:hover {
    cursor: pointer;
    color: var(--negative);
  }

  @media screen and (max-width: 769px) {
    max-width: 90%;
    width: 100%;
  }
`;
