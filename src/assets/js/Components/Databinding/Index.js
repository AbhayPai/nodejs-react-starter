import React, { useState } from 'react';

const Databinding = () => {
    let intialItem1Price = 349;
    const [item1Price, setPrice1] = useState(intialItem1Price);
    let intialItem2Price = 549.75;
    const [item2Price, setPrice2] = useState(intialItem2Price);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-8'>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <img src='/images/item-1.jpg' className='img-responsive' />
                        </div>
                        <div className='col-sm-3'>
                            <p>Easy Fit Tee With Pocket Detail</p>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group'>
                                <label>Quantity</label>
                                <select onChange={
                                    (event) => setPrice1(
                                        intialItem1Price *
                                            parseInt(event.target.selectedOptions[0].value)
                                    )
                                } className='form-control'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <p>PHP {item1Price}</p>
                        </div>
                        <div className='col-sm-2'>
                            <select className='form-control'>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <img src='/images/item-2.jpg' className='img-responsive' />
                        </div>
                        <div className='col-sm-3'>
                            <p>Easy Fit Tee With Pocket Detail</p>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group'>
                                <label>Quantity</label>
                                <select onChange={
                                    (event) => setPrice2(
                                        intialItem2Price * 
                                            parseInt(event.target.selectedOptions[0].value)
                                    )
                                } className='form-control'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <p>PHP {item2Price}</p>
                        </div>
                        <div className='col-sm-2'>
                            <select className='form-control'>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <h1>Total Price: <strong>{item1Price + item2Price}</strong></h1>
                </div>
            </div>
        </div>
    );
};

export default Databinding;
