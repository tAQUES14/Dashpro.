@extends('layouts.admin')

@section('content')
<h2>Detalhes do Curso</h2>

<a href="{{ route('classe.index', ['course' => $course->id]) }}">
    <button type="button">Aulas</button>
</a><br><br>

<a href="{{ route('course.index') }}">
    <button type="button">Listar</button>
</a><br><br>

<a href="{{ route('course.edit', ['course' => $course->id]) }}">
    <button type="button">Editar</button>
</a><br><br>

<form action="{{ route('course.destroy', ['course' => $course->id]) }}" method="POST">
    @csrf
    @method('delete')
    <button type="submit" onclick="return confirm('Tem certeza que deseja apagar este registro?')">Apagar</button>
</form><br>

<x-alert />

ID: {{ $course->id }}<br>
Nome: {{ $course->name }}<br>
Preço: {{ 'R$ ' . number_format($course->price, 2, ',', '.') }}<br>
Cadastrado: {{ \Carbon\Carbon::parse($course->created_at)->format('d/m/Y H:i:s') }}<br>
Editado: {{ \Carbon\Carbon::parse($course->updated_at)->format('d/m/Y H:i:s') }}<br>
@endsection