package crud_java_spring.restapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crud_java_spring.repositorio.ContatoRepositorio;
import crud_java_spring.restapi.model.Contato;

@RestController
@RequestMapping("/contatos")
public class ContatoController {

    @Autowired
    private ContatoRepositorio repositorio;

    @GetMapping
    public List<Contato> listar() {
        return repositorio.findAll();
    }    


    @PostMapping
    public void adicionar(@RequestBody Contato contato) {
        repositorio.save(contato);
    }

    @PutMapping
    public Contato alterar (@RequestBody Contato contato) {
        if(contato.getId()>0)
            return repositorio.save(contato);
        return null;
        repositorio.save(contato);
    }

    public String deletar (@RequestBody Contato contato) {
        if(contato.getId()>0) {
            repositorio.delete(entity: null);
            return "Removido com sucesso";
    }
        return "usuário não encontrado";
}
