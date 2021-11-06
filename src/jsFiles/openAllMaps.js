import OpenGoogle from './openGoogle.js'
import OpenYandex from './openYandex.js'

let OpenAllMaps = () => {
    return (
        <div>
            <h3>Export blocks (lesson 8):</h3>
            <ul>
                <OpenGoogle />
                <OpenYandex />
            </ul>
        </div>
    )
}

export default OpenAllMaps;