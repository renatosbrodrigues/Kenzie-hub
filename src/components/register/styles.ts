import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--gray-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  .headingContainer {
    width: 370px;
    max-width: 370px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
  }

  .headingContainer button {
    width: 50px;
    height: 35px;
    padding: 0;
    background: var(--gray-3);
    color: white;
    border: none;
    border-radius: var(--base-radius);
  }
  .headingContainer button:hover {
    cursor: pointer;
    background-color: var(--gray-1);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: var(--gray-3);
    padding: 42px 22px;
    width: 370px;
    height: 900px;
    gap: 22px;
    border-radius: var(--base-radius);
    overflow-y: scroll;
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: var(--headline-size);
    gap: 10px;
  }

  label p {
    color: var(--negative);
  }
  input {
    max-width: 370px;
    width: 300px;
    height: 50px;
    border-radius: var(--base-radius);
    border: none;
    background-color: var(--gray-2);
    color: white;
    padding: 10px;
  }
  input:focus {
    outline: 1px solid var(--color-primary);
  }

  select {
    width: 300px;
    background: var(--gray-2);
    border: none;
    padding: 15px;
    border-radius: var(--base-radius);
    color: white;
  }

  button {
    width: 300px;
    height: 50px;
    padding: 15px;
    color: white;
    background-color: var(--color-primary);
    border: none;
    border-radius: var(--base-radius);
  }

  button:hover {
    cursor: pointer;
    background-color: var(--color-primary-focus);
  }
`;
