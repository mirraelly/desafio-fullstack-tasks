
import { Menubar } from 'primereact/menubar';

export default function Menu() {
    const items = [
        {
            label: 'Lista de Tarefas',
            icon: 'pi pi-list-check'
        },
        {
            label: 'Nova Tarefa',
            icon: 'pi pi-plus'
        },
        {
            label: 'Status',
            icon: 'pi pi-filter',
            items: [
                {
                    label: 'Todas',
                    icon: 'pi pi-table text-white'
                },
                {
                    label: 'Pendentes',
                    icon: 'pi pi-hourglass'
                },
                {
                    label: 'Concluídas',
                    icon: 'pi pi-check-square'
                },
            ]
        }
    ];

    return (
        <div className="card">
            <Menubar model={items}  className="custom-menubar" />
        </div>
    )
}
        