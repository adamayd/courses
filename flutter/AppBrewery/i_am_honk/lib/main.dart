import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('I Am Honk'),
          centerTitle: true,
          backgroundColor: Colors.black,
        ),
        body: const Center(
          child: Image(
            image: AssetImage('images/vecteezy_black-and-white-car-vector-illustration-for-conceptual-design_7073895.png')
          )
        )
      )
    )
  );
}

