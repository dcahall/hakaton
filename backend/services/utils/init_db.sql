begin;

create table learning_model
(
    id          uuid not null constraint learning_model_pkey primary key,
    name        varchar,
    username    varchar,
    created     timestamp default now(),
    is_selected boolean,
    facts       varchar
);

create table users
(
    id      uuid not null constraint users_pkey primary key,
    username varchar,
    password varchar
);

create table roles
(
    id   uuid not null constraint roles_pkey primary key,
    role varchar
);

insert into roles (id, role) values
(gen_random_uuid(), 'user'),
(gen_random_uuid(), 'admin');

create table user_roles
(
    id      uuid not null constraint user_roles_pkey primary key,
    user_id uuid constraint user_roles_user_id_fkey
            references users
            on delete cascade,
    role_id uuid constraint user_roles_role_id_fkey
            references roles
            on delete cascade
);

commit;