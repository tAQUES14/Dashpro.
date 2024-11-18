@extends('errors::minimal')

@section('title', __('Acesso Negado'))
@section('code', '403')
@section('message')
    <div>
        <p>Você não tem permissão para acessar esta página ou essa página não existe.</p>
    </div>
@endsection
