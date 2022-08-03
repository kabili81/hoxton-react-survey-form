import { useState } from "react";
import AnswersList from './AnswersList'

type AnswerType = {
  review: string
  email: string
  username: string
  consistency: number
  colour: number
  logo: number
  bestFeatures: string[]
  worstFeatures: string[]
  timeSpent: string[]
}

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  const [answers, setAnswers] = useState<AnswerType[]>([])

  const exampleAnswe: AnswerType = {
    review: '',
    email: '',
    username: '',
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: ['color'],
    worstFeatures: ['logo'],
    timeSpent: ['swimming']
  };

  return (
    <main className='main'>
      <section className={`main__list ${open ? 'open' : ''}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className='main__form'>
        <form
          className='form'
          onSubmit={event => {
            event.preventDefault()

            const bestFeatures = [
              ...document.querySelectorAll('input[name="bestFeatures"]:checked')
            ].map(input => input.value)

            const worstFeatures = [
              ...document.querySelectorAll(
                'input[name="worstFeatures"]:checked'
              )
            ].map(input => input.value)

            const timeSpent = [
              ...document.querySelectorAll('input[name="timeSpent"]:checked')
            ].map(input => input.value)

            const answer: AnswerType = {
              review: event.target.review.value,
              email: event.target.email.value,
              username: event.target.username.value,
              consistency: Number(event.target.consistency.value),
              colour: Number(event.target.colour.value),
              logo: Number(event.target.logo.value),
              bestFeatures: bestFeatures,
              worstFeatures: worstFeatures,
              timeSpent: timeSpent
            }

            setAnswers([...answers, answer])
          }}
        >
          <h2>Tell us what you think about your rubber duck!</h2>

          <h3>What would you say are the best features of your rubber duck?</h3>
          <div className='checkboxes'>
            <label>
              <input type='checkbox' name='bestFeatures' value='colour' />
              It's yellow!
            </label>
            <label>
              <input type='checkbox' name='bestFeatures' value='sound' />
              It squeaks!
            </label>
            <label>
              <input type='checkbox' name='bestFeatures' value='logo' />
              It has a logo!
            </label>
            <label>
              <input type='checkbox' name='bestFeatures' value='size' />
              It's big!
            </label>
          </div>

          <h3>
            What would you say are the worst features of your rubber duck?
          </h3>
          <div className='checkboxes'>
            <label>
              <input type='checkbox' name='worstFeatures' value='colour' />
              It's yellow!
            </label>
            <label>
              <input type='checkbox' name='worstFeatures' value='sound' />
              It squeaks!
            </label>
            <label>
              <input type='checkbox' name='worstFeatures' value='logo' />
              It has a logo!
            </label>
            <label>
              <input type='checkbox' name='worstFeatures' value='size' />
              It's big!
            </label>
          </div>

          <h3>How do you rate your rubber duck consistency?</h3>
          <div className='radio-group'>
            <label>
              <input type='radio' name='consistency' value='1' required />
              <span className='radio-value'>1</span>
            </label>
            <label>
              <input type='radio' name='consistency' value='2' required />
              <span className='radio-value'>2</span>
            </label>
            <label>
              <input type='radio' name='consistency' value='3' required />
              <span className='radio-value'>3</span>
            </label>
            <label>
              <input type='radio' name='consistency' value='4' required />
              <span className='radio-value'>4</span>
            </label>
          </div>

          <h3>How do you rate your rubber duck colour?</h3>
          <div className='radio-group'>
            <label>
              <input type='radio' name='colour' value='1' />
              <span className='radio-value'>1</span>
            </label>
            <label>
              <input type='radio' name='colour' value='2' />
              <span className='radio-value'>2</span>
            </label>
            <label>
              <input type='radio' name='colour' value='3' />
              <span className='radio-value'>3</span>
            </label>
            <label>
              <input type='radio' name='colour' value='4' />
              <span className='radio-value'>4</span>
            </label>
          </div>

          <h3>How do you rate your rubber duck logo?</h3>
          <div className='radio-group'>
            <label>
              <input type='radio' name='logo' value='1' />
              <span className='radio-value'>1</span>
            </label>
            <label>
              <input type='radio' name='logo' value='2' />
              <span className='radio-value'>2</span>
            </label>
            <label>
              <input type='radio' name='logo' value='3' />
              <span className='radio-value'>3</span>
            </label>
            <label>
              <input type='radio' name='logo' value='4' />
              <span className='radio-value'>4</span>
            </label>
          </div>

          <h3>How do you like to spend time with your rubber duck?</h3>
          <div className='checkboxes'>
            <label>
              <input type='checkbox' name='timeSpent' value='swimming' />
              Swimming
            </label>
            <label>
              <input type='checkbox' name='timeSpent' value='bathing' />
              Bathing
            </label>
            <label>
              <input type='checkbox' name='timeSpent' value='chatting' />
              Chatting
            </label>
            <label>
              <input type='checkbox' name='timeSpent' value='noTime' />I don't
              like to spend time with it
            </label>
          </div>

          <h3>What else have you got to say about your rubber duck?</h3>
          <textarea name='review'></textarea>

          <h3>Put your name here (if you feel like it)?</h3>
          <input type='text' name='username' />

          <h3>Leave us your email pretty please?</h3>
          <input type='email' name='email' />

          <button className='form__submit'>Submit survey!</button>
        </form>
      </section>
    </main>
  )
}

export default Main
