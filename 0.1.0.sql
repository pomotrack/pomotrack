
CREATE TABLE pomotrack_user (
    user_id bigserial primary key,
    email varchar(255) NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    token varchar(255) NOT NULL
);

CREATE TABLE pomotrack_pomodoro (
    pomodoro_id bigserial primary key,
    user_id bigserial,
    description varchar(255) NOT NULL,
    time_started timestamp,
    time_ended timestamp
);

CREATE TABLE pomotrack_activity (
    activity_id bigserial primary key,
    pomodoro_id bigserial,
    type int,
    payload json
);
