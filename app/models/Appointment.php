<?php


class Appointment extends Eloquent {

	protected $fillable = array('*');
	public $timestamps = false;

	public function signups()
    {
        return $this->hasMany('Signup');
    }

    public function user()
    {
    	return $this->belongsTo('User');
    }
}