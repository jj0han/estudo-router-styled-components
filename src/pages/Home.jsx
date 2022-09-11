import { MainContent } from "./Styles";
import logo from "../images/logo192.png"

export default function Home() {
    return (
        <MainContent>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis autem possimus, consectetur laborum delectus nostrum mollitia eos natus nihil vel nulla illum recusandae tempore? Omnis iste minima sint quod perferendis.</p>
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias tempore necessitatibus, quaerat officia exercitationem, deserunt odio quasi accusantium dolorem repellat in fuga a at dolorum cum facere corporis voluptatibus dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam possimus atque voluptate velit autem perferendis temporibus. Quis, sed laborum repellat qui quasi sit laboriosam deserunt mollitia, voluptates, sequi aliquid.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ad veniam fugiat nemo saepe cumque, sit accusamus aperiam quos, recusandae quas adipisci fuga tenetur! Repellendus, placeat earum. Autem, ipsum perspiciatis.</p>
        </MainContent>
    )
}