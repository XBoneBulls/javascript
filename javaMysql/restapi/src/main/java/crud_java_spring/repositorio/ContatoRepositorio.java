package crud_java_spring.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import crud_java_spring.restapi.model.Contato;

public interface ContatoRepositorio extends JpaRepository <Contato, Long>{
    
}
