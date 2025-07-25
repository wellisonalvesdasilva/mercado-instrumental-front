export const MENU = [
  {
    label: 'Meus Anúncios',
    transacao: 'ROLE_ANUNCIANTE',
    icon: 'img:/icons-menu/icon-contratacoes.svg',
    items: [
      {
        to: '/admin/anuncios/form',
        label: 'Cadastrar',
        transacao: 'ROLE_ANUNCIANTE'
      },
      {
        to: '/admin/anuncios',
        label: 'Consultar',
        transacao: 'ROLE_ANUNCIANTE'
      }
    ]
  },
  {
    label: 'Administração',
    transacao: 'ROLE_ADMINISTRADOR',
    icon: 'img:/icons-menu/icon-config.svg',
    items: [
      {
        to: '/admin/anuncios/revisao',
        label: 'Revisar Anúncios',
        transacao: 'ROLE_ADMINISTRADOR'
      }
    ]
  }
]

export default MENU
