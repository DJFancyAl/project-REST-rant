const React = require('react')
const Def = require('../layouts/default')

function edit_form( {place} ){

    return (
        <Def>
            <main className="container">
                <h1>Edit Place</h1>
                <div className='col-6 m-auto'>
                    <form method='POST' action={`/places/${place.id}?_method=PUT`}>
                        <label className='form-label' htmlFor="name">Name of Place</label>
                        <input className='form-control mb-3' type="text" placeholder='Your place...' name='name' value={place.name} />
                        <label className='form-label' htmlFor="city">City</label>
                        <input className='form-control mb-3' type="text" placeholder='City Name...' name='city' value={place.city} />
                        <label className='form-label' htmlFor="state">State</label>
                        <select className='form-control mb-3' name="state" id="state" value={place.state}>
                            <option value="" disabled>--State--</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <label className='form-label' htmlFor="cuisines">Types of Cuisine</label>    
                        <fieldset>      
                            <input type="checkbox" name="cuisines" value="American" />American
                            <input type="checkbox" name="cuisines" value="Chinese" />Chinese           
                            <input type="checkbox" name="cuisines" value="Fast-Food" />Fast-Food
                            <input type="checkbox" name="cuisines" value="Italian" />Italian
                            <input type="checkbox" name="cuisines" value="Sushi" />Sushi
                            <input type="checkbox" name="cuisines" value="Thai" />Thai
                            <input type="checkbox" name="cuisines" value="Mexican" />Mexican
                            <input type="checkbox" name="cuisines" value="German" />German
                            <input type="checkbox" name="cuisines" value="Greek" />Greek
                            <input type="checkbox" name="cuisines" value="Comfort" />Comfort
                            <input type="checkbox" name="cuisines" value="Indian" />Indian    
                            <input type="checkbox" name="cuisines" value="French" />French
                            <input type="checkbox" name="cuisines" value="Pizza" />Pizza
                            <input type="checkbox" name="cuisines" value="Mediterranean" />Mediterranean
                            <input type="checkbox" name="cuisines" value="Steakhouse" />Steakhouse
                            <input type="checkbox" name="cuisines" value="Vegetarian/Vegan" />Vegetarian/Vegan
                            <input type="checkbox" name="cuisines" value="Other" />Other
                        </fieldset>  
                        <label className='form-label' htmlFor="image">Image</label>
                        <input className='form-control mb-3' type="text" placeholder='Image url...' name='image' value={place.pic} />
                        <input className='btn btn-primary' type="submit" value="Submit now" />
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = edit_form