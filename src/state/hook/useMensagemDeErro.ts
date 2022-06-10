import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

const useMensagemDeErro = () => {
    const mensagem = useRecoilValue(erroState)
    return mensagem;
}

export default useMensagemDeErro;