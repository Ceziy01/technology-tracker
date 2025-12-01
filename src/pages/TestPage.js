import '../styles/TestPage.css'
import Face from '../components/Face';

function HomePage() {
    const faces = [
        { color: "#0e181b" }
    ];

    return ( 
        <div className="test-page">
            {faces.map((f, i) => (
                <Face
                    key={i}
                    color={f.color}
                />
            ))}
        </div>
    );
}

export default HomePage;
