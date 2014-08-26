<?php

class AppointmentController extends \BaseController {

    public function __construct()
    {
        $this->beforeFilter('serviceAuth');
    }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        $appointments = Appointment::All();
        return Response::json([
            'appointments' => $appointments->toArray()
        ]);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$appointment = new Appointment;

		$appointment->name = Input::get('name');
		$appointment->comment = Input::get('comment');
		$appointment->date = Input::get('date');
		$appointment->time = Input::get('time');
		$appointment->location = Input::get('location');
		$appointment->user_id = Input::get('user_id');

		$appointment->save();

		return Response::json([
			'feedback' => 'User created.'
			], 200);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return Response::json([
			'appointments' => User::find($id)->appointments
			]);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}