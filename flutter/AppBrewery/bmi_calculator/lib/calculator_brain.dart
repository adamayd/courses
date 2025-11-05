import 'dart:math';

class CalculatorBrain {
  CalculatorBrain({required this.height, required this.weight});

  final int height;
  final int weight;

  double _bmi = 0.0;

  String calculateBMI() {
    _bmi = (weight / pow(height, 2)) * 703;
    return _bmi.toStringAsFixed(1);
  }

  String getResult() {
    if (_bmi >= 25) {
      return 'Overweight';
    } else if (_bmi >= 40) {
      return 'Obese';
    } else if (_bmi <= 18.5) {
      return 'Underweight';
    } else {
      return 'Normal';
    }
  }

  String getInterpretation() {
    if (_bmi >= 40) {
      return 'You have an unhealthy body weight. You should consult your doctor.';
    } else if (_bmi >= 25) {
      return 'You have a higher than normal body weight. Try to exercise more.';
    } else if (_bmi <= 18.5) {
      return 'You have a lower than normal body weight.  You can eat a bit more.';
    } else {
      return 'You have a normal body weight. Good job!';
    }
  }
}
