const React = require('react')
const Def = require('../layouts/default')

function edit_form( {place} ){
    let cuisinesChecked = place.cuisines

    return (
        <Def>
            <main className="container">
                <h1>Edit Place</h1>
                <div className='col-6 m-auto'>
                    <form method='POST' action={`/places/${place.id}?_method=PUT`}>
                        <div className='form-group mb-3'>
                            <label htmlFor="name">Name of Place</label>
                            <input className='form-control' type="text" placeholder='The place...' name='name' defaultValue={place.name} required />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="pic">Picture of Place</label>
                            <input className='form-control' type="url" id="pic" name="pic" defaultValue={place.pic} />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="city">City</label>
                            <input className='form-control' type="text" placeholder='City Name...' name='city' defaultValue={place.city} />
                        </div>
                        <div className='form-group mb-1'>
                            <label htmlFor="state">State</label>
                            <select className='form-control' name="state" id="state" defaultValue={place.state}>
                                <option defaultValue="" disabled selected>--State--</option>
                                <option defaultValue="AL">Alabama</option>
                                <option defaultValue="AK">Alaska</option>
                                <option defaultValue="AZ">Arizona</option>
                                <option defaultValue="AR">Arkansas</option>
                                <option defaultValue="CA">California</option>
                                <option defaultValue="CO">Colorado</option>
                                <option defaultValue="CT">Connecticut</option>
                                <option defaultValue="DE">Delaware</option>
                                <option defaultValue="DC">District of Columbia</option>
                                <option defaultValue="FL">Florida</option>
                                <option defaultValue="GA">Georgia</option>
                                <option defaultValue="HI">Hawaii</option>
                                <option defaultValue="ID">Idaho</option>
                                <option defaultValue="IL">Illinois</option>
                                <option defaultValue="IN">Indiana</option>
                                <option defaultValue="IA">Iowa</option>
                                <option defaultValue="KS">Kansas</option>
                                <option defaultValue="KY">Kentucky</option>
                                <option defaultValue="LA">Louisiana</option>
                                <option defaultValue="ME">Maine</option>
                                <option defaultValue="MD">Maryland</option>
                                <option defaultValue="MA">Massachusetts</option>
                                <option defaultValue="MI">Michigan</option>
                                <option defaultValue="MN">Minnesota</option>
                                <option defaultValue="MS">Mississippi</option>
                                <option defaultValue="MO">Missouri</option>
                                <option defaultValue="MT">Montana</option>
                                <option defaultValue="NE">Nebraska</option>
                                <option defaultValue="NV">Nevada</option>
                                <option defaultValue="NH">New Hampshire</option>
                                <option defaultValue="NJ">New Jersey</option>
                                <option defaultValue="NM">New Mexico</option>
                                <option defaultValue="NY">New York</option>
                                <option defaultValue="NC">North Carolina</option>
                                <option defaultValue="ND">North Dakota</option>
                                <option defaultValue="OH">Ohio</option>
                                <option defaultValue="OK">Oklahoma</option>
                                <option defaultValue="OR">Oregon</option>
                                <option defaultValue="PA">Pennsylvania</option>
                                <option defaultValue="RI">Rhode Island</option>
                                <option defaultValue="SC">South Carolina</option>
                                <option defaultValue="SD">South Dakota</option>
                                <option defaultValue="TN">Tennessee</option>
                                <option defaultValue="TX">Texas</option>
                                <option defaultValue="UT">Utah</option>
                                <option defaultValue="VT">Vermont</option>
                                <option defaultValue="VA">Virginia</option>
                                <option defaultValue="WA">Washington</option>
                                <option defaultValue="WV">West Virginia</option>
                                <option defaultValue="WI">Wisconsin</option>
                                <option defaultValue="WY">Wyoming</option>
                            </select>
                        </div>

                        <div className="form-group mb-3">
                            <label className='form-label' htmlFor="founded">Founded Year</label>
                            <input className="form-control" id="founded" name="founded" type='number' defaultValue={place.founded} />
                        </div>
                        
                        <label className='form-label' htmlFor="cuisines">Types of Cuisine</label> 
                        <fieldset className='mb-3'>
                            <div className="row m-auto">
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("American") ?
                                    <input type="checkbox" className="form-check-input" id="check1" name="cuisines" value="American" defaultChecked /> :
                                    <input type="checkbox" className="form-check-input" id="check1" name="cuisines" value="American" /> }
                                    <label className="form-check-label" htmlFor="check1">American</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Chinese") ?
                                    <input type="checkbox" className="form-check-input" id="check2" name="cuisines" value="Chinese" defaultChecked /> :
                                    <input type="checkbox" className="form-check-input" id="check2" name="cuisines" value="Chinese" /> }
                                    <label className="form-check-label" htmlFor="check2">Chinese</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Fast-Food") ?
                                    <input type="checkbox" className="form-check-input" id="check3" name="cuisines" value="Fast-Food" defaultChecked /> :
                                    <input type="checkbox" className="form-check-input" id="check3" name="cuisines" value="Fast-Food" /> }
                                    <label className="form-check-label" htmlFor="check3">Fast-Food</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Italian") ?
                                    <input type="checkbox" className="form-check-input" id="check4" name="cuisines" value="Italian" defaultChecked /> :
                                    <input type="checkbox" className="form-check-input" id="check4" name="cuisines" value="Italian" />}
                                    <label className="form-check-label" htmlFor="check4">Italian</label>
                                </div>
                            </div>
                            <div className="row m-auto">
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Sushi") ?
                                    <input type="checkbox" className="form-check-input" id="check5" name="cuisines" value="Sushi" defaultChecked /> :
                                    <input type="checkbox" className="form-check-input" id="check5" name="cuisines" value="Sushi" />}
                                    <label className="form-check-label" htmlFor="check5">Sushi</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Thai") ?
                                    <input type="checkbox" className="form-check-input" id="check6" name="cuisines" value="Thai" defaultChecked /> :
                                    <input type="checkbox" className="form-check-input" id="check6" name="cuisines" value="Thai" />}
                                    <label className="form-check-label" htmlFor="check6">Thai</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Mexican") ?
                                    <input type="checkbox" className="form-check-input" id="check7" name="cuisines" value="Mexican" defaultChecked /> : 
                                    <input type="checkbox" className="form-check-input" id="check7" name="cuisines" value="Mexican" />}
                                    <label className="form-check-label" htmlFor="check7">Mexican</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("German") ?
                                    <input type="checkbox" className="form-check-input" id="check8" name="cuisines" value="German" defaultChecked /> :
                                    <input type="checkbox" className="form-check-input" id="check8" name="cuisines" value="German" />}
                                    <label className="form-check-label" htmlFor="check8">German</label>
                                </div>
                            </div>
                            <div className="row m-auto">
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Greek") ?
                                    <input type="checkbox" className="form-check-input" id="check9" name="cuisines" value="Greek" defaultChecked /> :
                                    <input type="checkbox" className="form-check-input" id="check9" name="cuisines" value="Greek" />}
                                    <label className="form-check-label" htmlFor="check9">Greek</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Comfort") ?
                                    <input type="checkbox" className="form-check-input" id="check10" name="cuisines" value="Comfort" defaultChecked /> :
                                    <input type="checkbox" className="form-check-input" id="check10" name="cuisines" value="Comfort" />}
                                    <label className="form-check-label" htmlFor="check10">Comfort</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Indian") ?
                                    <input type="checkbox" className="form-check-input" id="check11" name="cuisines" value="Indian" defaultChecked /> :
                                    <input type="checkbox" className="form-check-input" id="check11" name="cuisines" value="Indian" />}
                                    <label className="form-check-label" htmlFor="check11">Indian</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("French") ?
                                    <input type="checkbox" className="form-check-input" id="check12" name="cuisines" value="French" defaultChecked />:
                                    <input type="checkbox" className="form-check-input" id="check12" name="cuisines" value="French" />}
                                    <label className="form-check-label" htmlFor="check12">French</label>
                                </div>
                            </div>
                            <div className="row m-auto">
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Pizza") ?
                                    <input type="checkbox" className="form-check-input" id="check13" name="cuisines" value="Pizza" defaultChecked />:
                                    <input type="checkbox" className="form-check-input" id="check13" name="cuisines" value="Pizza" />}
                                    <label className="form-check-label" htmlFor="check13">Pizza</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Mediterranean") ?
                                    <input type="checkbox" className="form-check-input" id="check14" name="cuisines" value="Mediterranean" defaultChecked />:
                                    <input type="checkbox" className="form-check-input" id="check14" name="cuisines" value="Mediterranean" />}
                                    <label className="form-check-label" htmlFor="check14">Mediterranean</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Steakhouse") ?
                                    <input type="checkbox" className="form-check-input" id="check15" name="cuisines" value="Steakhouse" defaultChecked />:
                                    <input type="checkbox" className="form-check-input" id="check15" name="cuisines" value="Steakhouse" />}
                                    <label className="form-check-label" htmlFor="check15">Steakhouse</label>
                                </div>
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Vegetarian/Vegan") ?
                                    <input type="checkbox" className="form-check-input" id="check16" name="cuisines" value="Vegetarian/Vegan" defaultChecked />:
                                    <input type="checkbox" className="form-check-input" id="check16" name="cuisines" value="Vegetarian/Vegan" />}
                                    <label className="form-check-label" htmlFor="check16">Vegetarian/Vegan</label>
                                </div>
                            </div>
                            <div className="row m-auto">
                                <div className="form-check col-sm-3">
                                    { cuisinesChecked.includes("Other") ?
                                    <input type="checkbox" className="form-check-input" id="check17" name="cuisines" value="Other" defaultChecked />:
                                    <input type="checkbox" className="form-check-input" id="check17" name="cuisines" value="Other" />}
                                    <label className="form-check-label" htmlFor="check17">Other</label>
                                </div>
                            </div>
                        </fieldset> 
                        <input className='btn btn-danger mb-3' type="submit" value="Edit Place" />
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = edit_form