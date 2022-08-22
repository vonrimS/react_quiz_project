import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return <main>
    <section className="quiz quiz-small">
      <form
        action=""
        className="setup-form" >
        <h2>setup quiz</h2>
        {/* amount */}
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input
            name="amount"
            className="form-input"
            min={1}
            max={50}
            type="number"
            id="amount"
            value={quiz.amount}
            onChange={handleChange} />
        </div>

        {/* category */}
        <div className="form-control">
          <label htmlFor="category">category</label>
          <select
            name="category"
            className="form-input"
            id="category"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="21">sports</option>
            <option value="23">history</option>
            <option value="24">politics</option>
          </select>
        </div>


        {/* difficulty */}
        <div className="form-control">
          <label htmlFor="difficulty">select difficulty</label>
          <select
            name="difficulty"
            className="form-input"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>

        {error && <p className="error">can't generate questions, please try different options</p>}
        <button type="submit" onClick={handleSubmit} className="submit-btn">start</button>
      </form>
    </section>
  </main>;
};

export default SetupForm;
