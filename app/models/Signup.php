<?php


class Signup extends Eloquent {

	public function appointment()
    {
        return $this->belongsTo('Appointment');
    }	
}