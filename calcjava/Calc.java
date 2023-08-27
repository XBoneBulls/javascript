import java.util.Scanner;

public class Calc {
    static public void main(String[] args) {

    Scanner scan = new Scanner(System.in);

    Numero n1 = new Numero();
    Numero n2 = new Numero();
    Numero res = new Numero();
    String opc = "S";

while(opc.equals("s") || opc.equals("S") {
    System.out.printf("Digite o valor 1: ");
    n1.setValor(scan.nextInt());
    System.out.printf("Digite o valor 2: ");
    n2.setValor(scan.nextInt());
    res.setValor(n1.getNumero() + n2.getNumero());
    System.out.printf("A soma de %d com %d e igual a %d", 
    n1.getNumero(), n2.getNumero(), res.getNumero());
    System.out.printf("Deseja somar outro valor?");
    opc=scan.next();
    System.out.printf("%n%n%n");
    }
}
}
