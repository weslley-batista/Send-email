# Envio de Formulario

## Ferramentas usadas
- Reacts (Framework)
- Javascript (Linguagem de programação)
- EmailJS (
    Ferramenta Responsavel por criar toda estrurura/template e conexão para o envio para o email correto

    ### Install EmailJS SDK using npm
    $ npm install @emailjs/browser --save

    ### params
    emailjs.send(serviceID, templateID, templateParams, publicKey)

    serviceID: obtem na guia 'email services' no emailjs
    templateID: obtem na guia 'email templates' no emailjs
    templateParams: Dados que o usuario irá enviar
    publicKey: obtem na guia 'account' no emailjs
)