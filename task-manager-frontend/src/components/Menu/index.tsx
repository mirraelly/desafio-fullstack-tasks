
import { Menubar } from 'primereact/menubar';

export default function Menu() {
    const items = [
        {
            label: 'Lista de Tarefas',
            icon: 'pi pi-home'
        },
        {
            label: 'Nova Tarefa',
            icon: 'pi pi-star'
        },
        {
            label: 'Status',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Todas',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Pendentes',
                    icon: 'pi pi-server'
                },
                {
                    label: 'Concluídas',
                    icon: 'pi pi-pencil'
                },
            ]
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        