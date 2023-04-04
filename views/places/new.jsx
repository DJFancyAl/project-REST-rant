const React = require('react')
const Def = require('../layouts/default')

function new_form(data){
    let message = ''
    if (data.message) {
        message = (
            <h4 className="alert alert-danger">
                {data.message}
            </h4>
        )
    }

    return (
        <Def>
            <main className='container'>
                <h1>Add a New Place</h1>
                <div className='col-sm-12 col-md-10 col-lg-6 m-auto'>
                    {message}
                    <form method='POST' action="/places">
                        <div className='form-group mb-3'>
                            <label htmlFor="name">Name of Place</label>
                            <input className='form-control' type="text" placeholder='The place...' defaultValue={data.body ? data.body.name: ''} name='name' required />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="pic">Picture of Place</label>
                            <input className='form-control' type="url" id="pic" name="pic" defaultValue={data.body ? data.body.pic: ''} />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="city">City</label>
                            <input className='form-control' type="text" placeholder='City Name...' name='city' defaultValue={data.body ? data.body.city: ''} />
                        </div>
                        <div className='form-group mb-1'>
                            <label htmlFor="state">State</label>
                            <select className='form-control' name="state" id="state" defaultValue={data.body ? data.body.state: ''}>
                                <option value="" disabled selected>--State--</option>
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
                        </div>

                        <div className="form-group mb-3">
                            <label className='form-label' htmlFor="founded">Founded Year</label>
                            <input className="form-control" id="founded" name="founded" type='number' defaultValue={data.body ? data.body.founded : new Date().getFullYear()} />
                        </div>

                        <label className='form-label' htmlFor="cuisines">Types of Cuisine</label> 
                        <fieldset className='mb-3'>
                            <div className="row m-auto">
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check1" name="cuisines" value="American" />
                                    <label className="form-check-label" htmlFor="check1">American</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check2" name="cuisines" value="Chinese" />
                                    <label className="form-check-label" htmlFor="check2">Chinese</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check3" name="cuisines" value="Fast-Food" />
                                    <label className="form-check-label" htmlFor="check3">Fast-Food</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check4" name="cuisines" value="Italian" />
                                    <label className="form-check-label" htmlFor="check4">Italian</label>
                                </div>
                            </div>
                            <div className="row m-auto">
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check5" name="cuisines" value="Sushi" />
                                    <label className="form-check-label" htmlFor="check5">Sushi</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check6" name="cuisines" value="Thai" />
                                    <label className="form-check-label" htmlFor="check6">Thai</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check7" name="cuisines" value="Mexican" />
                                    <label className="form-check-label" htmlFor="check7">Mexican</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check8" name="cuisines" value="German" />
                                    <label className="form-check-label" htmlFor="check8">German</label>
                                </div>
                            </div>
                            <div className="row m-auto">
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check9" name="cuisines" value="Greek" />
                                    <label className="form-check-label" htmlFor="check9">Greek</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check10" name="cuisines" value="Comfort" />
                                    <label className="form-check-label" htmlFor="check10">Comfort</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check11" name="cuisines" value="Indian" />
                                    <label className="form-check-label" htmlFor="check11">Indian</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check12" name="cuisines" value="French" />
                                    <label className="form-check-label" htmlFor="check12">French</label>
                                </div>
                            </div>
                            <div className="row m-auto">
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check13" name="cuisines" value="Pizza" />
                                    <label className="form-check-label" htmlFor="check13">Pizza</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check14" name="cuisines" value="Mediterranean" />
                                    <label className="form-check-label" htmlFor="check14">Mediterranean</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check15" name="cuisines" value="Steakhouse" />
                                    <label className="form-check-label" htmlFor="check15">Steakhouse</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check16" name="cuisines" value="Vegetarian/Vegan" />
                                    <label className="form-check-label" htmlFor="check16">Vegetarian/Vegan</label>
                                </div>
                            </div>
                            <div className="row m-auto">
                                <div className="form-check col-sm-3">
                                    <input type="checkbox" className="form-check-input" id="check17" name="cuisines" value="Other" />
                                    <label className="form-check-label" htmlFor="check17">Other</label>
                                </div>
                            </div>
                        </fieldset> 
                        <input className='btn btn-danger mb-3' type="submit" value="Create Place" />
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = new_form