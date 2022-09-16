import React from "react";
import "./style.css";
// const arr = [1,2,3,4,5];
// const newArr = arr.map(function(el) {
//     return <div style={{color: "red"}}>{el + 100}</div>;
// })
// console.log(arr, newArr);

let text = `Село Новый Урень основано в 1801 году графом Христофором Сергеевичем Минихом[3] на участке в 1697 дес. 1947 саж. земли, пожалованном ему в 1778 году Императрицей Екатериной II, когда он женился на одной из её фрейлин. Сюда он перевел из села Урено-Карлинского, Карсунского уезда, 102 муж. и 71 жен., и из деревни Малой Станичной 26 муж. и 14 жен., всего 32 двора. Впоследствии он купил у казны 383 дес. 1833 саж. пашни. Ему наследовала в 1816 году вдова, графиня Анна Андреевна с детьми. Одна из их дочерей вышла замуж за генерал-адъютанта Николая Александровича Исленьева и в приданое получила с. Новый Урень: 400 душ крестьян и 2400 дес. 1513 саж. земли. После смерти Исленьевых, и в виду малолетства их наследников, имение поступило в заведывание дворянской Опеки; которая продала 754 дес. 30 саж. тай. сов. И. П. Гулак-Артемовскому, строившему хутор в версте от села, а остальные 1668 дес. саж. отошли в крестьянский надел (усадебной 133 дес., пашни 450 дес. 561 саж. и выгону 85 дес.) на 405 душ. В 1903 году здесь 187 дворов (614 муж. и 643 жен.)[4]
В 1859 году сельцо Новый Урень, по проселочному тракту из г. Симбирска в с. Старые Алгаши, находилось в 1-м стане Симбирского уезда Симбирской губернии[5].
В 1861 году село в составе Шумовской волости.
Школа открыта здесь в 1866 году.[6][4]
Деревянная церковь в честь Покрова Пресвятые Богородицы была построена в 1869 году на средства местных крестьян[6].
В 1910 году, рядом с селом, было организовано Симбирское опытное поле Симбирского уездного земства с. Новый Урень Симбирского уезда Симбирской губернии[7]. В 1924 году — Новоуренская районная сельскохозяйственная опытная станция Наркомата земледелия РСФСР. С 1945 по 1956 гг. — Новоуренская государственная селекционная станция Главного управления сельскохозяйственной пропаганды Министерства сельского хозяйства СССР. С 1956—1968 гг. — Ульяновская областная сельскохозяйственная опытная станция Главного управления сельскохозяйственной науки Министерства сельского хозяйства РСФСР пос. Опытной станции Ульяновского района Ульяновской области. С 1968 г. — посёлок Тимирязевский Ульяновской областной сельскохозяйственной опытной станции[8].
В 1930 году в селе был организован колхоз имени Свердлова.`

export default ({data}) => {
    return <main>
        <h1>Devs Blog</h1>
        <div className="cards">
            {data.map(post => <div 
                className="post" 
                key={post.name}
                style={{
                    backgroundImage: `url(${post.image})`
                }}
            >
                <div className="post__block">
                    <span>{post.name}</span>
                    <span>{post.author}</span>
                </div>
                <div className="post__block">
                    {post.description.split(".").map((p, i, arr) => i !== arr.length - 1 && <p key={i}>{p + "."}</p>)}
                </div>
            </div>)}
            {text.split(/[\n\r]{1,2}/g).map((post, i) => <div className="post" key={i}>
                {post.split(".").map((p, j, arr) => {
                    if (j !== arr.length - 1) {
                        return <p key={j}>{p + "."}</p>
                    }
                })}
            </div>)}
        </div>
    </main>
}