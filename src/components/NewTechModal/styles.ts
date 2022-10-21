import styled from "styled-components";

export const StyledModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: var(--gradient-gray1);

  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    width: 450px;
    height: 350px;
    background-color: var(--gray-3);
    border-radius: var(--base-radius);
  }

  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: var(--gray-2);
    border-top-left-radius: var(--base-radius);
    border-top-right-radius: var(--base-radius);
    height: 50px;
  }

  .modalHeader h2 {
    font-size: var(--title-size);
    color: white;
  }

  .modalHeader button {
    background: none;
    border: none;
    font-size: var(--heading-size);
    color: var(--gray-1);
  }

  .modalHeader button:hover {
    color: var(--negative);
  }

  .modalForm {
    max-width: 450px;
    max-height: 350px;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: var(--heading-size);
    color: white;
    gap: 10px;
  }

  input,
  select {
    background-color: var(--gray-1);
    max-width: 300px;
    width: 90vw;
    height: 35px;
    border: none;
    border-radius: var(--base-radius);
  }

  input:focus,
  select:focus {
    outline: 2px solid var(--gray-0);
  }

  form button {
    max-width: 300px;
    width: 90vw;
    height: 40px;
    border: none;
    border-radius: var(--base-radius);
    color: var(--gray-0);
    background-color: var(--color-primary);
  }

  @media screen and(max-width: 769px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .modal {
      max-width: 90%;
      width: 100%;
      height: 380px;
      background-color: red;
    }

    .modalForm {
      max-height: 380px;
      height: 90%;
    }
  }
`;
