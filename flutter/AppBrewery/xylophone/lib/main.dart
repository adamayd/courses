import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';

void main() => runApp(const Xylophone());

class Xylophone extends StatelessWidget {
  const Xylophone({super.key});

  void playSound(int soundNumber) async {
    final player = AudioPlayer();
    await player.play(AssetSource('note$soundNumber.wav'));
  }

  Expanded buildKey({int soundNumber = 1, Color keyColor = Colors.red}) {
    return (Expanded(
      child: MaterialButton(
        color: keyColor,
        onPressed: () {
          playSound(soundNumber);
        },
      ),
    ));
  }

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.black,
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              buildKey(soundNumber: 1, keyColor: Colors.red),
              buildKey(soundNumber: 2, keyColor: Colors.orange),
              buildKey(soundNumber: 3, keyColor: Colors.yellow),
              buildKey(soundNumber: 4, keyColor: Colors.green),
              buildKey(soundNumber: 5, keyColor: Colors.teal),
              buildKey(soundNumber: 6, keyColor: Colors.blue),
              buildKey(soundNumber: 7, keyColor: Colors.purple),
            ],
          ),
        ),
      ),
    );
  }
}
