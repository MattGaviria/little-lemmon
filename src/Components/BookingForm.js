import React from 'react'
import { useState } from 'react'

const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [ocassion, setOcassion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);

    }

  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date:</label>
                        <input id="book-date" value={date} type='date' onChange={(e) => handleChange(e.target.value)} required />
                    </div>



                    {/* TiME SELECTION*/}
                    <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value="">Select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>
                                    
                                })
                            }
                        </select>

                    </div>

                    {/* for guests*/}

                    <div>
                        <label htmlFor='book-guests'>Number of Guests:</label>
                        <input id="book-guests" min="1" value={guests} type='number' onChange={(e) => setGuests(e.target.value)} required />

                    </div>


                    {/* for ocassion*/}

                    <div>
                        <label htmlFor='book-occasion'>Ocassion:</label>
                        <select id="book-occasion" key={ocassion} value={ocassion} onChange={(e) => setOcassion(e.target.value)} >
                        <option value="/">Select One</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        </select>

                    </div>

                    {/* submit*/}
                    <div className='bntReceive'>
                        <input aria-label='On Click' type='submit' value='Make Your Reservation'></input>
                    </div>

                
                </fieldset>



            </form>
        </section>
    </header>
  )
}

export default BookingForm;